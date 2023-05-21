import { useEffect, useState } from 'react';
import { Button } from 'shared/ui/button/button.component';

// for testing error boundary only
const BugButton = () => {
  const [isError, setIsError] = useState(false);

  const handleClick = () => setIsError(true);

  useEffect(() => {
    if (isError) {
      throw new Error();
    }
  }, [isError]);

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <Button onClick={handleClick}>
      throw error
    </Button>
  );
};

export { BugButton };
