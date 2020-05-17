// ES6 module syntax
import LocalizedStrings from 'react-native-localization';

export let strings = new LocalizedStrings({
  ru: {
    map: {
      header: 'Карта',
    },
    searchBox: {
      lblOrigin: 'Место отправления',
      originPlaceholder: 'Откуда',
      lblInterim: 'Промежуточный пункт',
      interimPlaceholder: 'Через',
      lblDestination: 'Место прибытия',
      destinationPlaceholder: 'Куда',
      btnBuildRoute: 'Построить маршрут',
      warningHeader: 'Предупреждение',
      warningBody: 'Допустимо только 3 значения промежуточных пунктов!',
    },
    drawer: {
      backToMap: 'Вернуться к карте',
    },
    routeInformation: {
      lblDistance: 'Длина маршрута',
      lblTime: 'Время',
      lblGeneralCondition: 'Общее состояние маршрута',
      lblIssuesLocations: 'Проблемные места',
    },
    actionPanel: {
      title: 'Выбор фото',
      takeFromCamera: 'Сделать новое фото',
      takeFromGalery: 'Выбрать из галереи',
      cancel: 'Отмена',
    },
    newMark: {
      header: 'Новая отметка',
      lblPhoto: 'Фотографии',
      lblLocation: 'Место',
      lblCondition: 'Состояние',
      conditionAverage: 'Плохое',
      conditionBad: 'Очень плохое',
      conditionAwful: 'Ужасное',
      lblDescription: 'Описание',
      btnAddPhoto: 'Добавить фото',
      btnChooseLocation: 'Выбрать место',
      btnCreate: 'Создать',
      btnCancel: 'Отмена',
      errorHeader: 'Ошибка',
      errorBody:
        'Перед выбором проблемного места должен быть построен маршрут.',
    },
    locationPickerMapButtons: {
      btnSelect: 'Выбрать место',
      btnCancel: 'Отмена',
    },
    currentMark: {
      header: 'Текущая отметка',
      lblPhoto: 'Фотографии',
      lblDescription: 'Описание',
      lblGeneralInformation: 'Общая информация: ',
      lblAuthor: 'Автор',
      lblCreationDate: 'Дата создания',
      lblLocation: 'Место',
      lblCondition: 'Состояние',
      lblRelevance: 'Актуальность',
      lblPoll: 'Опрос',
      pollBody: 'Актуальна ли проблема на данный момент?',
      pollAnswer: 'Ваш ответ был учтен.',
      btnYes: 'Да',
      btnNo: 'Нет',
      lblComments: 'Комментарии',
      leaveCommentPlaceholder: 'Оставить комментарий',
    },
    routeMarkers: {
      originMarker: 'Место отправления',
      interimMarker: 'Промежуточный пункт',
      destinationMarker: 'Место прибытия',
    },
    bottomTabNavigation: {
      map: 'Карта',
      profile: 'Профиль',
    },
    authorizedScreen: {
      header: 'Профиль',
      personalData: 'Личные данные',
      marksCatalog: 'Каталог отметок',
      applicationLanguage: 'Язык приложения',
      help: 'Помощь',
      logout: 'Выход',
    },
    unauthorizedScreen: {
      header: 'Профиль',
      heading: 'Вход в профиль',
      description:
        'Войдите или зарегистрируйтесь, чтобы просматривать каталог отметок и оставлять комментарии под существующими отметками',
      registration: 'Регистрация',
      login: 'Вход',
      applicationLanguage: 'Язык приложения',
      help: 'Помощь',
    },
    registration: {
      header: 'Регистрация',
      lblUserName: 'Имя',
      userNamePlaceholder: 'Как вас зовут?',
      lblEmail: 'Электронный адрес',
      emailPlaceholder: 'Введите адрес электронной почты',
      lblPassword: 'Пароль',
      passwordPlaceholder: 'Введите пароль',
      btnRegister: 'Зарегистрироваться',
    },
    authorization: {
      header: 'Вход',
      lblUserName: 'Имя',
      userNamePlaceholder: 'Введит адрес эл. почты или имя',
      lblPassword: 'Пароль',
      passwordPlaceholder: 'Введите пароль',
      btnLogin: 'Войти',
      textForgotPassword: 'Забыли пароль?',
      textDontHaveAnAccount: 'Еще нет аккаунта?',
      textCreateAccount: 'Создайте',
    },
    personalData: {
      header: 'Личные данные',
      userName: 'Имя пользователя',
      userNamePlaceholder: 'Введите имя пользователя',
      email: 'Электронная почта',
      emailPlaceholder: 'Введите адрес электронной почты',
      birthDate: 'Дата рождения',
      birthDatePlaceholder: 'Введите дату рождения',
      btnSave: 'Сохранить изменения',
    },
    marksCatalog: {
      header: 'Каталог отметок',
    },
    markCard: {
      header: 'Отметка',
      creationDate: 'Дата создания',
      location: 'Место',
      condition: 'Состояние',
      btnDetails: 'Просмотр',
      btnDelete: 'Удалить',
    },
    languageSelector: {
      applicationLanguage: 'Язык приложения',
      btnCancel: 'Отмена',
    },
    help: {
      header: 'Помощь',
      description:
        'Это приложение предназначено для облегчения движения водителей по заданным маршрутам. Приложение позволит водителям просматривать проблемные зоны вдоль маршрута, а также создавать собственные отметки проблемных зон с описаниями и фотографиями.',
      firstHeading: 'Просмотр проблемных зон и создание новых отметок',
      firstHeadingDescription:
        'Чтобы просмотреть проблемные участки маршрута, выполните следующие действия',
      viewMarkFirstStep: 'Нажмите на кнопку бокового меню',
      viewMarkSecondStep:
        'Установите место отправления и место прибытия (ПРИМЕЧАНИЕ: Вы также можете установить промежуточные места для маршрута. Для этого нажмите "+"',
      viewMarkThirdStep:
        'После настройки значений маршрута нажмите кнопку «Построить маршрут»',
      viewMarkFourthStep:
        'После построения маршрута параметры расстояния и времени будут доступны для просмотра в меню построения маршрута. Также под ними будет находиться список местоположений проблемных зон.',
      viewMarkFifthStep:
        'После этого вы увидите построенный маршрут на карте. Точка отправления будет отмечена зеленым маркером, точка прибытия будет красной, а промежуточные точки - синими.',
      viewMarkSixthStepFirstPart:
        'Проблемные участки маршрута будут отмечены специальными красными маркерами с восклицательным знаком',
      viewMarkSixthStepSecondPart:
        'Вы можете нажать на них, чтобы просмотреть информацию о неблагоприятном участке дороги.',
      viewMarkSeventhStep:
        'Затем откроется окно, в котором будет содержаться описание; проблемное состояние (плохое, очень плохое, ужасное); фотографии, демонстрирующие очевидность проблемы, а также комментарии зарегистрированных пользователей, которые не остались равнодушными к проблеме.',
      viewMarkEightStep:
        'Вы можете оценить актуальность проблемы, нажав кнопку «Да» или «Нет».',
      secondHeading: 'Создание собственных отметок с проблемными зонами',
      createMarkFirstStep: 'Нажмите на кнопку "+" на карте',
      createMarkSecondStep:
        'Заполните обязательные поля. Эти поля: описание, состояние, фотографии.',
      createMarkThirdStep: 'Нажмите на кнопку «Создать»',
      createMarkFourthStep:
        'Ваша отметка будет опубликована и доступна для просмотра при построении маршрутов после того, как модератор проверит содержимое новой отметки. Если содержание не соответствует теме приложения, отметка будет отклонена.',
      thirdHeading:
        'Регистрация в системе и дополнительные функции для пользователей',
      registrationFirstStep:
        'Для регистрации в системе перейдите на вкладку «Профиль».',
      registrationSecondStep:
        'Нажмите кнопку «Зарегистрироваться» или «Логин», если у вас уже есть учетная запись.',
      registrationThirdStep:
        'Заполните регистрационную форму и нажмите кнопку «Зарегистрироваться».',
      registrationFourthStep: 'После регистрации войдите в приложение.',
      registrationFeatureDescriptionHeading:
        'После входа у вас есть возможность использовать следующие функции',
      feature1: 'Создание комментариев к существующим отметкам.',
      feature2: 'Просмотр собственного каталога отметок.',
      feature3: 'Редактирование или удаление отметок, которые вы создали',
      languageHeading: 'Смена языка приложения',
      langStep1: 'Нажмите на кнопку "Язык приложения"',
      langStep2: 'Выберите подходящий язык.',
      langStep3: 'Языковое меню будет автоматически закрыто.',
    },
  },
  en: {
    map: {
      header: 'Map',
    },
    searchBox: {
      lblOrigin: 'Origin locataion',
      originPlaceholder: 'From',
      lblInterim: 'Intermediate locataion',
      interimPlaceholder: 'Through',
      lblDestination: 'Destination locataion',
      destinationPlaceholder: 'To',
      btnBuildRoute: 'Buld Route',
      warningHeader: 'Warning',
      warningBody: 'Maximum intermediate points number is 3!',
    },
    drawer: {
      backToMap: 'Back to Map',
    },
    routeInformation: {
      lblDistance: 'Travel Distance',
      lblTime: 'Travel Time',
      lblGeneralCondition: 'General road condition',
      lblIssuesLocations: 'Issues locations',
    },
    actionPanel: {
      title: 'Select a photo',
      takeFromCamera: 'Take Photo From Camera',
      takeFromGalery: 'Choose Photo From Library',
      cancel: 'Cancel',
    },
    newMark: {
      header: 'New mark',
      lblPhoto: 'Photos',
      lblLocation: 'Location',
      lblCondition: 'Condition',
      conditionAverage: 'Average',
      conditionBad: 'Bad',
      conditionAwful: 'Awful',
      lblDescription: 'Description',
      btnAddPhoto: 'Add photo',
      btnChooseLocation: 'Choose location',
      btnCreate: 'Create',
      btnCancel: 'Cancel',
      errorHeader: 'Error',
      errorBody: 'The route must be built to select a location.',
    },
    locationPickerMapButtons: {
      btnSelect: 'Select Location',
      btnCancel: 'Cancel',
    },
    currentMark: {
      header: 'Current mark',
      lblPhoto: 'Photos',
      lblDescription: 'Description',
      lblGeneralInformation: 'General information',
      lblAuthor: 'Author',
      lblCreationDate: 'Creation date',
      lblLocation: 'Location',
      lblCondition: 'Condition',
      lblRelevance: 'Relevance',
      lblPoll: 'Poll',
      pollAnswer: 'Your answer has been taken into account.',
      pollBody: 'Is this problem relevant at the moment?',
      btnYes: 'Yes',
      btnNo: 'No',
      lblComments: 'Comments',
      leaveCommentPlaceholder: 'Leave a comment',
    },
    routeMarkers: {
      originMarker: 'Origin location',
      interimMarker: 'Intermediate location',
      destinationMarker: 'Destination location',
    },
    bottomTabNavigation: {
      map: 'Map',
      profile: 'Profile',
    },
    authorizedScreen: {
      header: 'Profile',
      personalData: 'Personal data',
      marksCatalog: 'Marks catalog',
      applicationLanguage: 'Application language',
      help: 'Help',
      logout: 'Logout',
    },
    unauthorizedScreen: {
      header: 'Profile',
      heading: 'Login to profile',
      description:
        'Login or register to browse the catalog of your marks and leave comments on existing marks',
      registration: 'Registration',
      login: 'Login',
      applicationLanguage: 'Application language',
      help: 'Help',
    },
    registration: {
      header: 'Register',
      lblUserName: 'User name',
      userNamePlaceholder: 'What is your name?',
      lblEmail: 'Email',
      emailPlaceholder: 'Input email',
      lblPassword: 'Password',
      passwordPlaceholder: 'Input password',
      btnRegister: 'Sign On',
    },
    authorization: {
      header: 'Login',
      lblUserName: 'User name',
      userNamePlaceholder: 'Email or user name',
      lblPassword: 'Password',
      passwordPlaceholder: 'Input password',
      btnLogin: 'Sign In',
      textForgotPassword: 'Forgot password?',
      textDontHaveAnAccount: 'Do not have an account yet?',
      textCreateAccount: 'Create',
    },
    personalData: {
      header: 'Personal data',
      userName: 'User name',
      userNamePlaceholder: 'Input username',
      email: 'Email',
      emailPlaceholder: 'Input email',
      birthDate: 'Birth date',
      birthDatePlaceholder: 'Input birthdate',
      btnSave: 'Save changes',
    },
    marksCatalog: {
      header: 'Marks catalog',
    },
    markCard: {
      header: 'Mark',
      creationDate: 'Creation date',
      location: 'Location',
      condition: 'Condition',
      btnDetails: 'Details',
      btnDelete: 'Delete',
    },
    languageSelector: {
      applicationLanguage: 'Application language',
      btnCancel: 'Cancel',
    },
    help: {
      header: 'Help',
      description:
        'This application is designed to facilitate the movement of drivers on given routes. The application will allow drivers to view problem areas along the route, as well as create their own marks of problem areas with descriptions and photos.',
      firstHeading: 'Problem areas view and creating new marks',
      firstHeadingDescription:
        'To view problem sections of the route, follow the next steps',
      viewMarkFirstStep: 'Click on the side-menu button',
      viewMarkSecondStep:
        'Set up the place of departure and place of arrival (NOTE: you can also set intermediate locations for the route. To do this, click "+"',
      viewMarkThirdStep:
        'After setting the route values, click the button "Build route"',
      viewMarkFourthStep:
        'After building a route, the travel distance and travel time parameters will be available for viewing in the construction menu.Also below them will be a list of locations of problem areas of the route.',
      viewMarkFifthStep:
        'After that, you will see the builded route on the map. The departure point will be marked with a green marker, the arrival point will be red, and the intermediate points will be blue.',
      viewMarkSixthStepFirstPart:
        'Problem areas of the route will be marked with special red markers with an exclamation point',
      viewMarkSixthStepSecondPart:
        'You can click on them to view information about an unfavorable section of the road.',
      viewMarkSeventhStep:
        'Then will be opened the window in which the description will be contained; problem status (bad, very bad, worst); photos showing the obviousness of the problem, as well as comments by registered users who did not remain indifferent to the problem.',
      viewMarkEightStep:
        'You can evaluate the relevance of the problem by clicking either "Yes" or "No" buttons.',
      secondHeading: 'Creation of own marks with problem areas',
      createMarkFirstStep: 'Click on the button "+" on the map',
      createMarkSecondStep:
        'Fill in required fields. These fields are: description, condition, photos.',
      createMarkThirdStep: 'Click on the button "Create"',
      createMarkFourthStep:
        'Your mark will be published and available for viewing when building routes after the moderator checks the contents of the new mark. If the content does not match the theme of the application, the mark will be rejected.',
      thirdHeading:
        'Registration in the system and additional features for users',
      registrationFirstStep:
        'To register in the system, go to the "Profile" tab.',
      registrationSecondStep:
        'Click the "Register" or "Login" button if you already have an account.',
      registrationThirdStep:
        'Fill out the registration form and click the "Register" button.',
      registrationFourthStep: 'After registration, log in to the application.',
      registrationFeatureDescriptionHeading:
        'After you log in, you have an ability to use the next features',
      feature1: 'Leaving comments on existing marks.',
      feature2: 'View your own catalog of marks.',
      feature3: 'Edit or remove marks that you have created.',
      languageHeading: 'Changing application language',
      langStep1: 'Click the button "Application language"',
      langStep2: 'Choose the appropriate language.',
      langStep3: 'The language menu will be automatically closed.',
    },
  },
});
