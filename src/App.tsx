import { useState } from 'react';
import { Container } from 'components/Container';
import { Search } from 'components/Search';
import { TheHeader } from 'components/TheHeader';

function App() {
  const [hasError, setError] = useState(true);

  const onSubmit = (text: string) => {};

  return (
    <Container>
      <TheHeader />
      <Search hasError={hasError} onSubmit={onSubmit} />
    </Container>
  );
}

export default App;
