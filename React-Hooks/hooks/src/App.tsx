import React, {
  useState, useEffect, useMemo, useCallback,
  useRef, useContext,useReducer, useImperativeHandle
} from 'react';

interface User {
  name: string;
  login: string;
  avatar_url: string;
}

const App: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [users, setUsers] = useState<[User]>();

  const names = useMemo(() => users?.map(user => user.name).join(', ') || '', [users]);
  const greetings = useCallback(
    (user: User) => alert(`Hello ${user}`),
    []
  )

  function focusOnInput() {
    inputRef.current?.focus()
  }

  return (
    <form >
      <input type="text" ref={inputRef} />
    </form>
  )
}

export default App;