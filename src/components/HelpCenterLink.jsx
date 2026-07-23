import { useNavigate } from 'react-router-dom';

const HelpCenterLink = () => {
  const navigate = useNavigate();

  return (
    <span
      onClick={() => navigate('/help')}
      style={{ marginLeft: '10px', cursor: 'pointer', textDecoration: 'underline' }}
    >
      Help Center
    </span>
  );
};

export default HelpCenterLink;
