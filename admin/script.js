const names = [
  { id: "0", names: "Общее" },
  { id: "1", names: "мама и папа" },
  { id: "2", names: "Андрей,  Екатерина" },
  { id: "3", names: "Александр, Елена" },
  { id: "4", names: "Виктор,Алеся, Александра, Артём" },
  { id: "5", names: "дядя Витя, тётя Оля" },
  { id: "6", names: "Фёдор, Полина" },
  { id: "7", names: "Александр, Мария" },
  { id: "8", names: "Александр, Мария" },
  { id: "9", names: "Евгений, Татьяна" },
  { id: "10", names: "Николай,Елена" },
  { id: "11", names: "Александр, Юлия" },
  { id: "12", names: "Олег, Ольга" },
  { id: "13", names: "Никита, Ольга" },
  { id: "14", names: "Олег, Алина" },
  { id: "15", names: "Александр, Диана" },
  { id: "16", names: "Алексей, Дарья" },
  { id: "17", names: "Дмитрий, Яна" },
  { id: "18", names: "Влад, Диана" },
  { id: "19", names: "Татьяна" },
  { id: "20", names: "Илья" },
  { id: "21", names: "Павел" },
  { id: "22", names: "Дмитрий" },
  { id: "23", names: "Николай" },
  { id: "24", names: "тётя Ядя" },
];

const baseURL = location.href.replace('admin/', ''); //location.origin
const container = document.getElementById('container');

names.forEach((name, index) => {
  const nameElem = document.createElement('div');
  nameElem.classList.add('name');
  const titleNameElem = document.createElement('p');
  titleNameElem.classList.add('name__title');
  titleNameElem.innerHTML = name.names;
  const linkNameElem = document.createElement('a');
  linkNameElem.classList.add('name__link');

  const link = `${baseURL}?id=${name.id}`;
  linkNameElem.href = link;
  linkNameElem.innerHTML = link;
  linkNameElem.target = '_blank';

  const btnCopyLink = document.createElement('button');
  btnCopyLink.innerHTML = 'copy';
  btnCopyLink.classList.add('name__btn-copy');
  btnCopyLink.dataset.link = link;

  const btnShareViber = document.createElement('a');
  btnShareViber.classList.add('name__btn-share-viber');
  btnShareViber.href = 'viber://forward?text=' + link;
  btnShareViber.target = '_blank';

  const btnShareTelegram = document.createElement('a');
  btnShareTelegram.classList.add('name__btn-share-telegram');
  btnShareTelegram.href = `https://telegram.me/share/url?url=${link}&amp;text=${link}`;
  btnShareTelegram.target = '_blank';

  const linkWrapper = document.createElement('div');
  linkWrapper.classList.add('name__link-wrapper');

  linkWrapper.append(
    linkNameElem,
    btnCopyLink,
    btnShareViber,
    btnShareTelegram
  );

  nameElem.append(titleNameElem, linkWrapper);

  container.append(nameElem);
});

container.addEventListener('click', (e) => {
  const btnCopy = e.target;

  if (btnCopy.classList.contains('name__btn-copy')) {
    const linkUrl = btnCopy.dataset.link;
    console.log(linkUrl);
    navigator.clipboard
      .writeText(linkUrl)
      .then(() => {
        console.log('Text copied to clipboard ' + linkUrl);
        btnCopy.innerHTML = 'copied';

        setTimeout(() => {
          btnCopy.innerHTML = 'copy';
        }, 5000);
      })
      .catch((err) => {
        console.error('Error in copying text: ', err);
      });
  }
});
