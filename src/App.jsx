import { useTranslation } from 'react-i18next';
import './App.css';

function App() {
  const { t, i18n } = useTranslation();

  const handleI18n = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <button type="button" onClick={() => handleI18n('en')}>
        English
      </button>
      <button type="button" onClick={() => handleI18n('zh')}>
        繁體中文
      </button>
      <p>{t('Welcome')}</p>
    </>
  );
}

export default App;
