import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, RefreshCw, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';

class ErrorBoundaryClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Logger l'erreur (en production, envoyer vers un service de monitoring)
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({
      error,
      errorInfo
    });

    // En production, envoyer vers un service de monitoring
    if (import.meta.env.PROD) {
      // TODO: Envoyer vers Sentry, LogRocket, etc.
      // sendToMonitoringService('error-boundary', { error, errorInfo });
    }
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <ErrorFallback
          error={this.state.error}
          errorInfo={this.state.errorInfo}
          onReset={this.handleReset}
        />
      );
    }

    return this.props.children;
  }
}

function ErrorFallback({ error, errorInfo, onReset }) {
  const navigate = useNavigate();
  const isDevelopment = import.meta.env.DEV;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full border-2 border-red-200">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <AlertCircle className="w-8 h-8 text-red-600" />
            <CardTitle className="text-2xl text-red-900">
              Une erreur s'est produite
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700">
            Désolé, une erreur inattendue s'est produite. Notre équipe a été notifiée.
          </p>

          {isDevelopment && error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-sm font-semibold text-red-900 mb-2">Détails de l'erreur (développement uniquement):</p>
              <pre className="text-xs text-red-800 overflow-auto max-h-48">
                {error.toString()}
                {errorInfo && errorInfo.componentStack && (
                  <div className="mt-2 pt-2 border-t border-red-300">
                    {errorInfo.componentStack}
                  </div>
                )}
              </pre>
            </div>
          )}

          <div className="flex gap-3 pt-4">
            <Button
              onClick={onReset}
              variant="outline"
              className="flex-1"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Réessayer
            </Button>
            <Button
              onClick={() => navigate(createPageUrl('Home'))}
              className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
            >
              <Home className="w-4 h-4 mr-2" />
              Retour à l'accueil
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default ErrorBoundaryClass;
