import React from 'react';
function getUser() {
  return Promise.resolve({ id: '1', name: 'Robin' });
}

function Ttt() {
  const [search, setSearch] = React.useState('');
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const loadUser = async () => {
      const user = await getUser();
      setUser(user);
    };

    loadUser();
  }, []);

  function handleChange(event) {
    setSearch(event.target.value);
  }

  return (
    <div>
      {user ? <p>Signed in as {user.name}</p> : null}

      <p>Searches for {search ? search : '...'}</p>
    </div>
  );
}
export default Ttt;
