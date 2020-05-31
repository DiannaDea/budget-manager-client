import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(LanguageDetector).init({
  resources: {
    en: {
      translations: {
        logout: 'Logout',
        signInBtn: 'Sign in',
        signInStep1Text: 'Sign in',
        signInStep1Description: 'Enter email and password',
        signInStep2Text: 'Verification',
        signInStep2Description: 'Scan QR code and enter code',
        signInTitle: 'Sign in',
        emailLabel: 'Email',
        passwordLabel: 'Password',
        verificationCodeLabel: 'Verification code',
        verifyCodeBtn: 'Verify code',
        banksTab: 'Banks',
        groupsTab: 'Groups',
        transactionsTab: 'Transactions',
        goalsTab: 'Financial goals',
      },
    },
    ua: {
      translations: {
        logout: 'Вийти',
        signInBtn: 'Увійти',
        signInStep1Text: 'Увійти до системи',
        signInStep1Description: 'Введіть електронну пошту та пароль',
        signInStep2Text: 'Верифікація',
        signInStep2Description: 'Відскануйте QR-код і введіть код верифікації',
        signInTitle: 'Увійти до системи',
        emailLabel: 'Електронна пошта',
        passwordLabel: 'Пароль',
        verificationCodeLabel: 'Код верифікації',
        verifyCodeBtn: 'Підтвердити код',
        banksTab: 'Банки',
        groupsTab: 'Групи',
        transactionsTab: 'Транзакції',
        goalsTab: 'Фінансові цілі',
      },
    },
  },
  fallbackLng: 'en',
  debug: true,

  // have a common namespace used around the full app
  ns: ['translations'],
  defaultNS: 'translations',

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ',',
  },

  react: {
    wait: true,
  },
});

export default i18n;
