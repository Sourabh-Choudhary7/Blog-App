import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(false);
    useEffect(() => {
        const abortCont = new AbortController();
        // using async await
        const getBlogs = async () => {
          try {
            setIsPending(true);
            const res = await fetch(url, {signal: abortCont.signal});
            const data = await res.json();
            setBlogs(data);
          } catch (err) {
            console.log(err);
          } finally {
            setIsPending(false);
          }
        };
        getBlogs();
        return ()=> abortCont.abort();
      }, [url]);
    return {blogs, isPending}
}
export default useFetch;

// promisses
// useEffect(() => {
//     fetch("http://localhost:8000/blogs") //using promises
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         console.log(data);
//         setIsPending(false);
//         setBlogs(data);
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
// }, [])
    

