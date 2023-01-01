const fetchData  = async (searchTerm) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey : 'a4a7bba3',
            s: searchTerm
        }
    });
    console.log(response.data);
};

/* Refactor #1 
let timeoutId;
const input = document.querySelector('input');
const onInput = event => {
    if(timeoutId) {
        clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
        fetchData(event.target.value);
    }, 200)
    
};

input.addEventListener('input', onInput);

*/



// Refactor #1
const input = document.querySelector('input');
const onInput = event => {
    fetchData(event.target.value);
};

input.addEventListener('input', debounce(onInput, 500));

