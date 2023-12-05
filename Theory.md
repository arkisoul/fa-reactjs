# React Fundamentals

### Life cycle methods

- constructor
- render
- componentDidMount
- componentWillUnmount
- shouldComponentUpdate

## Todo app

**Requirement**

- List of all todos
- Todo by Id - Todo details
- Create/add a new todo
- Update a todo
- Delete a todo

Nice to have features

- User authentication

## Hooks

- useState
- useEffect
- useRef
- useMemo
- useCallback
- useReducer
- useContext
- useLayoutEffect

- useId
- useTransition

## Ref

**To Create**

- React.createRef()
- useRef() // it's a hook and only works in functional component

**Usage**

- can keep last updated data throughout render and rerender cycles without causing rerender of a component on value change
- using `ref` prop can be assigned to a html element and gives back the reference to that dom element
- using `ref` prop on a class component gives access to that class component instance
- using `ref` prop on a fun component along with wraping that functional component in `forwardRef` call gives the opportunity to access a HTML element in child component from it's parent.
