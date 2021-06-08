#Approach

A simple scientific calculator made using react, the usage of typescript was essential to keep the code base type safe and to help with the ease of development.
The calculator keypad layout was rendered using flexbox to ensure it is 1D responsive, with the ability to wrap if needed. The calculator was divided into 3 main parts, the container which is the Calculator component, the result which shows the input as well as the result in the Result component , the keypad which shows the button layout,components are segregated according to functionality and component logic to make it easy to understand, develop and maintain if needed in the future. 

#Assumptions 

It was assumed that native js is not allowed, hence the functionality to register keyboard presses on the window wasn't possible without attaching event listeners on the dom window, which could have been done on mount.

Grid vs flexbox tardeoff, grid is a better option for wrapping the body but I did not feel it was that necessary in this task as there was only one calculator.

#Improvemnts 

Split the result / input screen into two, so the last operation is cached and shown on the upper half whereas the result is shown on the lower half.

Write test cases to mock the API calls.

Add  functionality to register keyboard presses on the window for better UX.

Add a few more complex mathematical operations like integration,differentiation etc.


#Refernces 

Design was inspired by a few calculators that i saw online.
