import './App.css'
import Pages from "@/pages/index.jsx"
import { Toaster } from "@/components/ui/toaster"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { LanguageProvider } from "@/contexts/LanguageContext"
import ErrorBoundary from "@/components/ErrorBoundary"
import { useToast } from "@/components/ui/use-toast"
import logger from "@/utils/logger"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
      throwOnError: false,
      onError: (error) => {
        // Logger les erreurs (console.error en dev, service externe en prod)
        logger.error('Query error:', error);
        // Les erreurs critiques seront gérées par ErrorBoundary ou les composants individuels
      },
    },
    mutations: {
      throwOnError: false,
      onError: (error) => {
        logger.error('Mutation error:', error);
        // Les erreurs de mutation seront gérées par les composants qui les appellent
      },
    },
  },
})

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <LanguageProvider>
          <Pages />
          <Toaster />
        </LanguageProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  )
}

export default App 