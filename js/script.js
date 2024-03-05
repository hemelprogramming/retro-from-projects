const loadData = async (searchText = 'music') => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`
  );
  const data = await res.json();
  const musicData = data.posts;
  displayCetagory(musicData);
};
const displayCetagory = musicData => {
  // console.log(musicData);
  const cetagoryCardContainer = document.getElementById(
    'category-card-container'
  );
  cetagoryCardContainer.textContent = '';
  musicData.forEach(category => {
    // console.log(category);
    // category card

    const categoryCard = document.createElement('div');
    // categoryCard.classList = `card bg-[#797DFC1A] shadow-xl p-10`;
    categoryCard.innerHTML = `
     <div class="mt-12">
            <div class="card bg-[#797DFC1A] shadow-xl p-10">
              <div class="lg:flex items-center gap-6 mb-6">
                <div class="avatar online">
                 <div class="w-24 rounded-full">
                 <img src=${category.image}" /> 
               </div>
              </div>
                <div class="space-y-3 ">
                  <div class="lg:flex items-center gap-6">
                    <h2 class="card-title"><span>#</span>${category.category}</h2>
                    <p class="text-sm font-medium"><span>Author :</span>${category.author.name}</p>
                  </div>
                  <div class="space-y-3">
                    <h1 class="text-xl font-bold">10 Kids Unaware of Their Halloween Costume</h1>
                    <p class="text-sm font-normal">It’s one thing to subject yourself to ha Halloween costume mishap
                      because, hey that’s your
                      prerogative</p>
                  </div>
                </div>
              </div>
              <hr>
              <!-- view port -->
              <div class="flex gap-8 mt-6">
                <div class="flex gap-4">
                  <img src="images/tabler-icon-message-2.png" alt="">
                  <p>${category.comment_count}</p>
                </div>
                <div class="flex gap-4">
                  <img src="images/Group 16.png" alt="">
                  <p>${category.view_count}</p>
                </div>
                <div class="flex gap-4">
                  <img src="images/Group 18.png" alt="">
                  <p>${category.posted_time}</p>
                </div>
              </div>
              <div class="card-body">
                <div class="card-actions justify-end">
                  <button Onclick="isMessageClick()"  class="h-[28px] w-[28px] "><img src="images/Group 40106.png" alt=""></button>
                </div>
              </div>
            </div>
          </div>         
    `;
    cetagoryCardContainer.appendChild(categoryCard);
  });
  toggleLodingSpinner(false);
};
// message show
const titleContainer = document.getElementById('title-container');
const isMessageClick = () => {
  const titleDiv = document.createElement('div');
  titleDiv.classList = `flex justify-between bg-[#FFFFFF] p-4 rounded-lg mt-5`;
  titleDiv.innerHTML = `
         <h4>10 Kids Unaware of Their Halloween Costume</h4>
           <div class="flex items-center justify-between gap-2 p-4">
             <img src="images/tabler-icon-eye.png" alt="">
             <p>1568</p>
           </div>
`;
  titleContainer.appendChild(titleDiv);
};

// handel search
const handelSearchButton = () => {
  toggleLodingSpinner(true);
  const inputField = document.getElementById('input-field');
  const searchText = inputField.value;
  // console.log(searchText);
  loadData(searchText);
};
// loading spinner
const toggleLodingSpinner = isLoading => {
  const loadingSpinner = document.getElementById('loading-spinner');
  if (isLoading) {
    loadingSpinner.classList.remove('hidden');
  } else {
    loadingSpinner.classList.add('hidden');
  }
};
const letestNews = async () => {
  const res = await fetch(
    'https://openapi.programming-hero.com/api/retro-forum/latest-posts'
  );
  const data = await res.json();
  const newNews = data;
  letestNewsDisplay(newNews);
};

const letestNewsDisplay = newNews => {
  const letestNewsContainer = document.getElementById('letest-news-container');
  newNews.forEach(news => {
    // console.log(news);
    const newsdiv = document.createElement('div');
    newsdiv.classList = `card bg-base-100 shadow-xl`;
    newsdiv.innerHTML = `
            <figure class="px-10 pt-10">
              <img src="${news.cover_image}" alt="Shoes"
                class="rounded-xl" />
            </figure>
            <div class="card-body items ">
               <div class="flex gap-2">
             <img src="images/Frame (5).png" alt="">
              <span>${news?.author?.posted_date || 'No publish date'}</span>
              </div>
              <div class="space-y-4">
              <h2 class="text-sm font-extrabold lg:w-[300px]">What will a mars habitat force that  impact in our daily life!!!</h2>
              <p class="lg:w-[330px]">Yes, you can run unit tests and view the  results directly within the app. </p>
              </div>
              <div class="flex items-center gap-4 mt-3 text-sm font-bold">
               <div class="avatar ">
               <div class="w-12 rounded-full">
               <img src="${news?.profile_image}" />
             </div>
             </div>
            <div>${news.author.name}
            <p>${news?.author?.designation || 'Unknown'}</p>
            </div>
           </div>
          </div>
    `;
    letestNewsContainer.appendChild(newsdiv);
  });
};
loadData();
letestNews();
