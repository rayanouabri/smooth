import './App.css'
import Pages from "@/pages/index.jsx"
import { Toaster } from "@/components/ui/toaster"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { LanguageProvider } from "@/contexts/LanguageContext"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
      // Ne pas afficher d'erreurs automatiquement pendant le chargement
      throwOnError: false,
      // Ne pas afficher d'erreurs dans la console pour les requêtes qui échouent silencieusement
      onError: (error) => {
        // Seulement logger les erreurs, ne pas afficher de toast automatiquement
        console.error('Query error:', error);
      },
    },
    mutations: {
      // Ne pas afficher d'erreurs automatiquement pour les mutations
      throwOnError: false,
      onError: (error) => {
        console.error('Mutation error:', error);
      },
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <Pages />
        <Toaster />
      </LanguageProvider>
    </QueryClientProvider>
  )
}

export default App 