import { Grid, GridItem, useDisclosure } from "@chakra-ui/react";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import MainContent from "./components/MainContent";
import {useState } from "react";
import {Category, Meal, MealDetails, SearchForm} from './types/index'
import useHttpData from "./hooks/useHttpData";
import axios from "axios";
import RecipeModal from "./components/RecipeModal";
import useFetch from "./hooks/useFetch";
const baseURL = "https://www.themealdb.com/api/json/v1/1/"

const url = `${baseURL}list.php?c=list`;

const makeMealUrl = (category: Category) => `${baseURL}filter.php?c=${category.strCategory}`

const defaultCategory = {strCategory: 'Beef'}


function App() {

  const [selectedCategory, setSelectedCategory] = useState<Category>(defaultCategory)
  const { loading, data } = useHttpData<Category>(url);


  const { loading: loadingMeal, data: dataMeal, setData: setMeals, setLoading: setLoadingMeal } = useHttpData<Meal>
  (makeMealUrl(defaultCategory));

  const { isOpen, onOpen, onClose } = useDisclosure();

  const {fetch, loading: loadingMealDetails, data: mealDetailData} = useFetch<MealDetails>();


  const searchMealDetails = (meal: Meal) =>{
    onOpen()
    fetch(`${baseURL}lookup.php?i=${meal.idMeal}`)

  }



  const searchApi = (searchForm: SearchForm) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchForm.search}`
    setLoadingMeal(true)
    axios.get<{ meals: Meal[]}>(url)
      .then(({data}) => setMeals(data.meals))
      .finally(() => setLoadingMeal(false))
  }


  return (
    <>
    <Grid
      templateAreas={`"header header"
                  "nav main"`}
      gridTemplateRows={"60px 1fr "}
      gridTemplateColumns={{sm: `0 1fr`, md: `250px 1fr`}}
      fontSize={16}
    >
      <GridItem pt="7px" bg="white" area={"header"} pos='sticky' top='0' zIndex='1' boxShadow='lg'>
        <Header onSubmit={searchApi}></Header>
      </GridItem>

      <GridItem p="5" area={"nav"} h="calc(100vh - 60px)" pos='sticky' top='60px' left='0' overflowY='auto'>
        <SideNav categories={data} loading={loading} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} ></SideNav>
      </GridItem>

      <GridItem p="4" bg="gray.100" area={"main"}>
        <MainContent meals={dataMeal} loading={loadingMeal} openRecipe={searchMealDetails} ></MainContent>
      </GridItem>
    </Grid>
    <RecipeModal isOpen={isOpen} onClose={onClose} loading={loadingMealDetails} data={mealDetailData}/>
    </>
  );
}

export default App;
