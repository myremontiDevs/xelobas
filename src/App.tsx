
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Suspense, lazy, createContext, useState } from 'react';
import Root from "./Components/Root";
import { MainContextInteface } from "./Components/Interfaces/MainContextInterface";
import LoadingBar from "./Components/LoadingBar";

const MyPage = lazy(() => import('./Components/Pages/MyPage'));
const RegistrationPage = lazy(() => import('./Components/Pages/RegistrationPage'));
const SearchPage = lazy(() => import('./Components/Pages/SearchPage'));
const HomePage = lazy(() => import('./Components/Pages/HomePage'));
const CategoryPage = lazy(() => import('./Components/CategoryPage'));
const CraftsmanProfile = lazy(() => import('./Components/CraftsmanProfile'));
const FilteredCraftsmen = lazy(() => import('./Components/FilteredCraftsmen'));
const CraftsmanRegistration = lazy(() => import('./Components/CraftsmanRegistration'));
const UserRegistration = lazy(() => import('./Components/UserRegistration'));
const CraftsmanAuthorization = lazy(() => import('./Components/CraftsmanAuthorization'));
const UserAuthorization = lazy(()=> import('./Components/UserAuthorization'));
const CraftsmanPersonalPage = lazy(()=>import('./Components/CraftsmanPersonalPage'))

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<HomePage />} />
      <Route path="myPage" element={<MyPage />} />
      <Route path="registration" element={<RegistrationPage />} />
      <Route path="searchPage" element={<SearchPage />} />
      <Route path="category/:title" element={<CategoryPage />} />
      <Route path="craftsman/:userId" element={<CraftsmanProfile />} />
      <Route path="filter" element={<FilteredCraftsmen />} />
      <Route path="registration/craftsmanRegistration" element={<CraftsmanRegistration />} />
      <Route path="registration/userRegistration" element={<UserRegistration />} />
      <Route path="authorization/craftsmanAuthorization" element={<CraftsmanAuthorization/>}/>
      <Route path="authorization/UserAuthorization" element={<UserAuthorization/>}/>
      <Route path="personalPage/:userId" element={<CraftsmanPersonalPage/>}/>
    </Route>
  )
);

export const MainContext = createContext<MainContextInteface>({
  menuBar: false,
  setMenuBar: () => {},
  selectedNavigation: "home",
  setSelectedNavigation: () => {},
  filterByCity: "",
  setFilterByCity: () => {},
  filterByDistrict: "",
  setFilterByDistrict: () => {},
  filterByProfession: "",
  setFilterByProfession: () => {},
  searchByCity: "",
  setSearchByCity: () => {},
  searchByDistrict: "",
  setSearchByDistrict: () => {},
  searchByProfession: "",
  setSearchByProfession: () => {},
  searchByVerification: "",
  setSearchByVerification: () => {},
  searchByExperience: [],
  setSearchByExperience: () => {},
  searchByPriceFrom: "",
  setSearchByPriceFrom: () => {},
  searchByPriceUpTo: "",
  setSearchByPriceUpTo: () => {},
});

function App() {
  const [menuBar, setMenuBar] = useState<boolean>(false);
  const [selectedNavigation, setSelectedNavigation] = useState<string>("home");
  const [filterByCity, setFilterByCity] = useState<string>("");
  const [filterByDistrict, setFilterByDistrict] = useState<string>("");
  const [filterByProfession, setFilterByProfession] = useState<string>("");
  const [searchByCity, setSearchByCity] = useState<string>("");
  const [searchByDistrict, setSearchByDistrict] = useState<string>("");
  const [searchByProfession, setSearchByProfession] = useState<string>("");
  const [searchByVerification, setSearchByVerification] = useState<string>("");
  const [searchByExperience, setSearchByExperience] = useState<string[]>([]);
  const [searchByPriceFrom, setSearchByPriceFrom] = useState<string>("");
  const [searchByPriceUpTo, setSearchByPriceUpTo] = useState<string>("");

  return (
    <>
      <Suspense fallback={<LoadingBar />}>
        <MainContext.Provider
          value={{
            menuBar,
            setMenuBar,
            selectedNavigation,
            setSelectedNavigation,
            filterByCity,
            setFilterByCity,
            filterByDistrict,
            setFilterByDistrict,
            filterByProfession,
            setFilterByProfession,
            searchByCity,
            setSearchByCity,
            searchByDistrict,
            setSearchByDistrict,
            searchByProfession,
            setSearchByProfession,
            searchByVerification,
            setSearchByVerification,
            searchByExperience,
            setSearchByExperience,
            searchByPriceFrom,
            setSearchByPriceFrom,
            searchByPriceUpTo,
            setSearchByPriceUpTo
          }}
        >
          <RouterProvider router={router} />
        </MainContext.Provider>
      </Suspense>
    </>
  );
}

export default App;


