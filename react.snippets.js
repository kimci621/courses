/*
useState:
const [position, setPosition] = useState<arrowPosition>("right");
useEffect:
Эффект после рендеринга компонента
 useEffect(() => {
 }, [])
Эффект после обновления компонента(rerender)
 useEffect(() => {
 })
Эффект при unmount компонента
 useEffect(() => {
   return ()=>{
     console.log('do something before unmount')
   }
 }, [])
Эффект при изменении определенного параметра
 useEffect(() => {
 }, [position])

 */