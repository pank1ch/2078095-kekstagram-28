const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = [
  'Ну, чё уставились?',
  'Отведай-ка силушки богатырской!',
  'Ооо! Туда нам надо',
  'Не знаешь, что делать? Упал — отжался!',
  'И, кстати! Я на этой картинке просто плохо получился'
];

const NAMES = [
  'Тихон',
  'Алеша',
  'Добрыня',
  'Илья',
  'Юлий',
  'Влади́мир Кра́сно Со́лнышко',
  'Калыван',
  'Тугарин'
];

const DESCRIPTION_COUNT = 25;
const AVATARS = 6;

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createRandomId = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const createId = createRandomId(1,25);
const createCommentId = createRandomId(1,1000);
const createUrlId = createRandomId(1,25);

const getComment = () => ({
  id: createCommentId(),
  avatar: `img/avatar-${ getRandomInteger(1,AVATARS) }.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

const getImageDescription = () => ({
  id: createId(),
  url: `photos/${ createUrlId() }.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(15,200),
  comments: getComment(),
});

const imageDescriptions = Array.from({length: DESCRIPTION_COUNT}, getImageDescription);

console.log(imageDescriptions);
