1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans:
getElementById :
This method is for finding element by ID.ID is a unique name in HTML, so it only gives one element.Even if two elements have same ID, browser will only return first.So we use this when we want to work with just one special element.

 getElementsByClassName :
 This method is for finding elements by class.Class name can be used in many elements together in HTML page.So this method will return a list of all elements with that class.

querySelector :
 This method is very powerful and flexible.It use CSS selector rule, like #id, .class, or tag.But it only gives the first element that match the selector.So we use it when we want only one element but with CSS rule style.

querySelectorAll :
 This method is like querySelector but bigger.It also use CSS selector, but it gives all elements that match.It returns a list  of all elements in the page.We can loop over them and do action for each element.



2.How do you create and insert a new element into the DOM?
Ans:
Create the element:
const newElement = document.createElement('div');
Insert the element:
const parentElement = document.getElementById('parentElementId');
parentElement.appendChild(newElement);



3.What is Event Bubbling and how does it work?
Ans:
Event bubbling happen when we click or do event on child element.The event first happen on that child, then go up to parent, then to grandparent.
If i gave a example, if we click on a button inside a div, first the button get the event.After that, the same event “bubble” and move to the div.Then from the div it again move up to body, and finally to the document.So the event travel from small element to big element step by step.This is useful because we can handle event on parent instead of all children.But sometimes we don’t want bubbling, so we can stop it with event.stopPropagation().
So, bubbling means event start from inside and go outwards like bubbles in water.



4.What is Event Delegation in JavaScript? Why is it useful?
Ans:
Event delegation means we put event on parent, not on all child.When child is clicked, event bubble to parent, parent can handle it.It is useful because we don’t need to add many event listeners.We just add one listener on parent, and control all child.It also help when new child elements are added later.Parent can still catch the event without new code.




5.What is the difference between preventDefault() and stopPropagation() methods?
Ans:
preventDefault() : This stop the browser’s normal action.
For example, link <a> will not open, form will not submit.

stopPropagation() : This stop the event from bubbling up.
So event will not go from child to parent elements.

So, preventDefault() stop browser action.
stopPropagation() stop event travel to parent.
