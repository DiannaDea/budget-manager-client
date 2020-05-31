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
        goalTitle: 'Financial goal',
        goalAmount: 'Goal amount (UAH)',
        goalAlreadySaved: 'Already saved (UAH)',
        goalToSave: 'To save (UAH)',
        goalChartBestProgress: 'Best progress',
        goalChartWorstProgress: 'Worst progress',
        goalChartLiveProgress: 'Live progress',
        goalDescriprion: 'Description',
        goalBestSavePerMonth: 'Best save per month',
        goalWorstSavePerMonth: 'Worst save per month',
        goalNumberOfMonths: 'Number of months',
        goalStartDate: 'Start date',
        goalEndDate: 'End date',
        goalSelectGroupMessage: 'Please select group!',
        noGoalsMessage: 'No goals for this group!',
        goalStart: 'Goal start',
        goalEnd: 'Goal end',
        goalAmountLine: 'Amount',
        goalProgress: 'Progress',
        deleteGoalTitle: 'Delete goal',
        deleteGoalMessage: 'Are you sure that you want to delete goal:',
        createGoalBtn: 'Create goal',
        createGoalHeader: 'Create financial goal',
        createGoalMessage: 'Financial goal was added!',
        goalName: 'Name',
        goalSavePerMonth: 'Save per month',
        joinGroupTitle: 'Join group',
        joinGroupDescription: 'Enter invitation code to join group',
        invitationCodeField: 'Invitation code',
        checkCodeBtn: 'Check code',
        membersText: 'Members',
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
        goalTitle: 'Фінансова ціль',
        goalAmount: 'Сума цілі (UAH)',
        goalAlreadySaved: 'Вже збережено (UAH)',
        goalToSave: 'Залишилось зберегти (UAH)',
        goalChartBestProgress: 'Найкращий прогрес',
        goalChartWorstProgress: 'Найгірший прогрес',
        goalChartLiveProgress: 'Поточний прогрес',
        goalDescriprion: 'Опис',
        goalBestSavePerMonth: 'Максимальна сума для економії на місяць',
        goalWorstSavePerMonth: 'Мінімальна сума для економії на місяць',
        goalNumberOfMonths: 'Кількість місяців',
        goalStartDate: 'Дата початку',
        goalEndDate: 'Приблизна дата досягнення',
        goalSelectGroupMessage: 'Виберіть групу!',
        noGoalsMessage: 'Обрана група не має фінансових цілей!',
        goalStart: 'Дата початку',
        goalEnd: 'Дата закінчення',
        goalAmountLine: 'Сума цілі',
        goalProgress: 'Прогрес',
        deleteGoalTitle: 'Видалити ціль',
        deleteGoalMessage: 'Ви впевнені, що хочете видалити ціль:',
        createGoalBtn: 'Створити ціль',
        createGoalHeader: 'Створити фінансову ціль',
        createGoalMessage: 'Додано фінансову ціль!',
        goalName: 'Назва цілі',
        goalSavePerMonth: 'Сума для економії на місяць (UAH)',
        joinGroupTitle: 'Приєднатись до групи',
        joinGroupDescription: 'Введіть код запрошення, щоб приєднатися до групи',
        invitationCodeField: 'Код запрошення',
        checkCodeBtn: 'Перевірити код',
        membersText: 'Учасники',
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
