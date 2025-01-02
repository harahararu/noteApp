const END_POINT = 'http://0.0.0.0:5000'

const FetchData = (url:string, setData:Function ,setIsLoading:Function) => {
    fetch(END_POINT + "/" + url)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error("Fetching data failed", error));
    setIsLoading(true);
}