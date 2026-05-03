export async function getMenuData(){
  try {
    const response =
    await
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    let data = await response.json();
    return data.categories.filter(categories =>
      !["Chicken", "Goat"].includes(categories.strCategory)
    );
  }
  catch (error) {
    console.error("Error");
    return [];
  }
}