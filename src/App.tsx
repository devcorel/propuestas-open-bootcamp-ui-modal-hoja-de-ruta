import { MainLayout } from './components/layout/MainLayout';

function App() {
   // const MainLayoutMemoize = useMemo(() => {
   //    return <MainLayout />;
   // }, []);

   return (
      <div className="fixed lg:relative h-full lg:h-screen w-screen flex justify-center items-center bg-gray-800">
         <MainLayout />
      </div>
   );
}

export default App;
