import { useNavigate } from 'react-router-dom';

interface IErrorFallbackProps {
  resetErrorBoundary: (...args: unknown[]) => void;
}

const ErrorFallback = ({ resetErrorBoundary }: IErrorFallbackProps) => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 className="logo-font">There was an error!</h1>
      <div className="btn-group">
        <button type="button" className="btn" onClick={() => resetErrorBoundary()}>
          Try again
        </button>
        <button
          type="button"
          style={{ marginLeft: '20px' }}
          className="btn"
          onClick={() => {
            navigate('/', { replace: true });
            window.location.reload();
          }}
        >
          go Home
        </button>
      </div>
    </div>
  );
};

// eslint-disable-next-line import/no-unused-modules
export default ErrorFallback;
