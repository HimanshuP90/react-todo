+++++++++ Component +++++++
@ Fundamental building block for React
@ Have internal state and external props
@ Can be nested inside of each other and used across multiple
  files and even projects


+++++++++ State +++++++++

@ Internal information about a component- the stuff that might
  be changing dynamically 
@ we have some initial state
@ Change it with this.setState()


++++++++ render +++++++++

@ Called whenever the state changes
@ Here, we decide what the user should see based on the state
@ Notice that even though we are calling render on every state 
  change, not everything is getting reloaded on the page
@ Virtual DOM - computing the most efficient way to add/delete 
  things from the page


++++++++ props +++++++++++

@Props is short for "properties".
@ External quantities handed to the component.
@ The compoent can not changes these.
@ Props are used to pass data from parent to child or by the component itself.
@ They are immutable and thus will not be changed.


++++++++ Functional Components ++++++++

@ Only accepts props 
@ No internal state
@ Functions instead of classes


+++++++++++ MobX ++++++++++++++

Just do something to the state and MobX will make sure your app respects the changes
Why:  Simple, Focused, Performant, Unobtrustive