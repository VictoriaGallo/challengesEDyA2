1. Invoke **getGifs** function inside a new function in **GifGrid Component** , keep in mind, it’s an async function
2. Invoke new function from above to get list of images, use a **useState** hook to handle the list.
3. Print in console, inside new function, list of Gifs you got from **getGifs** function
4. Use **useEffect** hook to call new function created in point 2.
5. Print title of each category into the web page, use a **div tag** to group printed list.
6. Add a **className** attribute to **div** tag to use some styles
7. Create a new **GifItem** component to handle print of each title
8. Send by **props**, each category data to **GifItem**
