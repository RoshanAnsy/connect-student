import { useEffect } from "react";

//This hook handle the  click when you click outside the components
export default function useOnClickOutSide(ref,handler){

    useEffect(()=>{
        //defining the listener function to be handle clicks/event
        const listener=(event)=>{
            // If the click/touch event originated inside the ref element, do nothing
            if(!ref.current || ref.current.contains(event.target)){
                return;
            }
            //otherwise call the provider handler function
            handler(event);
        };
         // Add event listeners for mousedown and touchstart events on the document
         document.addEventListener("mousedown",listener);
         document.addEventListener("touchstart",listener);

             // Cleanup function to remove the event listeners when the component unmounts or when the ref/handler dependencies change

             return ()=>{
                document.removeEventListener("mousedown",listener)
                document.removeEventListener("touchstart",listener);

             };
    }, [ref,handler] );
}