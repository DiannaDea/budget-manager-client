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
        connectCardBtn: 'Connect card',
        closeBtn: 'Close',
        viewCardsBtn: 'View Cards',
        deleteBtn: 'Delete',
        bankCardCardsCount: 'Cards count',
        bankCardBalance: 'Balance',
        bankCardLastUpdate: 'Last update',
        deleteBankTitle: 'Delete bank',
        deleteBankText1: 'Are you sure that you want to delete all',
        deleteBankText2: 'cards?',
        btnYes: 'Yes',
        btnNo: 'No',
        messageNoBanks: 'Ooops... No banks connected yet!',
        btnBack: 'Back',
        cardsTab: 'Cards',
        messageNoCards: 'Ooops... No cards connected yet!',
        cardItemBalance: 'Balance',
        cardItemCreditLimit: 'Credit limit',
        cardItemOwner: 'Owner',
        cardItemGroup: 'Group',
        editBtn: 'Edit',
        deleteCardTitle: 'Delete card',
        deleteCardText: 'Are you sure that you want to delete card:',
        editCardTitle: 'Update card',
        saveBtn: 'Save',
        chooseGroupPlaceholder: 'Choose group',
        connectCardStep1Title: 'Validate card',
        connectCardStep1Description: 'Enter card information',
        connectCardStep2Title: 'Choose group',
        connectCardStep2Description: 'Enter group information',
        validateCardBtn: 'Validate card',
        bankSelect: 'Bank',
        bankSelectPlaceholder: 'Choose bank',
        connectCardTitle: 'Connect your card',
        cardNumberLabel: 'Card number',
        accessTokenLabel: 'Access token',
        merchantIdLabel: 'Merchant ID',
        merchatPasswordLabel: 'Merchant password',
        successMessageTitle: 'Success!',
        errorMessageTitle: 'Ooops!',
        cardMessagePrefix: 'Card',
        successCardVerificationMessage: 'has successfully been verified',
        errorCardVerificationMessage: 'Something went wrong: can\'t save card',
        successSaveCardMessage: 'was saved',
        btnSaveCard: 'Save card',
        unableToValidateCardMessage: 'Bank can not validate card. Please try again',
        createTransactionTittle: 'Create transaction',
        createTransactionSuccess: 'Transaction was successfully created',
        saveTransactionBtn: 'Save transaction',
        updateTransactionTittle: 'Update transaction',
        updateTransactionSuccess: 'Transaction was successfully updated',
        updateTransactionBtn: 'Update transaction',
        amountLabel: 'Amount, UAH',
        descriptionLabel: 'Description',
        categoryLabel: 'Category',
        categoryPlaceholder: 'Choose category',
        createTransaction: 'Create transaction',
        deleteTransactionTitle: 'Delete transaction',
        deleteTransactionDescription: 'Are you sure that you want to delete transaction?',
        customTransaction: 'Custom transaction',
        categoriesTab: 'Categories',
        dateFilter: 'Date',
        dateFrom: 'From',
        dateTo: 'To',
        applyFiltersBtn: 'Apply',
        resetFiltersBtn: 'Reset',
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
        connectCardBtn: 'Підключити картку',
        closeBtn: 'Закрити',
        viewCardsBtn: 'Картки',
        deleteBtn: 'Видалити',
        bankCardCardsCount: 'Кількість карток',
        bankCardBalance: 'Баланс',
        bankCardLastUpdate: 'Останнє оновлення',
        deleteBankTitle: 'Видалити банк',
        deleteBankText1: 'Ви впевнені, що хочете видалити всі',
        deleteBankText2: 'картки?',
        btnYes: 'Так',
        btnNo: 'Ні',
        messageNoBanks: 'На жаль, ще немає підключених банків!',
        btnBack: 'Назад',
        cardsTab: 'Банківські картки',
        messageNoCards: 'На жаль, ше немає підключених карток!',
        cardItemBalance: 'Баланс',
        cardItemCreditLimit: 'Кредитний ліміт',
        cardItemOwner: 'Власник',
        cardItemGroup: 'Група',
        editBtn: 'Редагувати',
        deleteCardTitle: 'Видалити картку',
        deleteCardText: 'Ви впевнені, що хочете видалити карту:',
        editCardTitle: 'Редагувати карту',
        saveBtn: 'Зберегти',
        chooseGroupPlaceholder: 'Оберіть групу',
        connectCardStep1Title: 'Валідація картки',
        connectCardStep1Description: 'Введіть інформацію про карту',
        connectCardStep2Title: 'Виберіть групу',
        connectCardStep2Description: 'Введіть інформацію про групу',
        validateCardBtn: 'Провести валідацію',
        bankSelect: 'Банк',
        bankSelectPlaceholder: 'Виберіть банк',
        connectCardTitle: 'Підключити карту',
        cardNumberLabel: 'Номер карти',
        accessTokenLabel: 'Токен доступу',
        merchantIdLabel: 'Ідентифікатор мерчанту',
        merchatPasswordLabel: 'Пароль мерчанту',
        successMessageTitle: 'Операція прошла успішно!',
        errorMessageTitle: 'Помилка при здійсненні операції!',
        cardMessagePrefix: 'Картка',
        successCardVerificationMessage: 'успішно верифікована',
        errorCardVerificationMessage: 'Неможливо зберегти карту',
        successSaveCardMessage: 'успішно збережено',
        btnSaveCard: 'Зберегти карту',
        unableToValidateCardMessage: 'Банк не може підтвердити картку. Будь ласка спробуйте ще раз',
        createTransactionTittle: 'Створити транзакцію',
        createTransactionSuccess: 'Транзакція була успішно створена',
        saveTransactionBtn: 'Зберегти',
        updateTransactionTittle: 'Редагувати транзакцію',
        updateTransactionSuccess: 'Транзакцію було успішно оновлено',
        updateTransactionBtn: 'Зберегти',
        amountLabel: 'Сума, UAH',
        descriptionLabel: 'Опис',
        categoryLabel: 'Категорія',
        categoryPlaceholder: 'Виберіть категорію',
        createTransaction: 'Створити транзакцію',
        deleteTransactionTitle: 'Видалити транзакцію',
        deleteTransactionDescription: 'Ви впевнені, що хочете видалити транзакцію?',
        customTransaction: 'Користувацьа транзакція',
        categoriesTab: 'Категорії',
        dateFilter: 'Дата',
        dateFrom: 'Від',
        dateTo: 'До',
        applyFiltersBtn: 'Фільтр',
        resetFiltersBtn: 'Скинути',
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
