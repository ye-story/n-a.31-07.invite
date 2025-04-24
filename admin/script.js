const names = [
  { id: '0', names: 'Общее' },
  { id: '1', names: 'Глеб и Николь' },
  { id: '2', names: 'Дмитрий, Татьяна, Даша и Маша' },
  { id: '3', names: 'Михаил и Светлана' },
  { id: '4', names: 'Эдуард и Елизавета' },
  { id: '5', names: 'Кирилл' },
  { id: '6', names: 'Максим и Алина' },
  { id: '7', names: 'Александр, Екатерина и Дарья' },
  { id: '8', names: 'Илья, Ирина и Арина' },
  { id: '9', names: 'Юлия, Сергей и Ксения' },
  { id: '10', names: 'Глеб и Анастасия' },
  { id: '11', names: 'Дмитрий, Татьяна, Валерия и Милана' },
  { id: '12', names: 'Оксана' },
  { id: '13', names: 'Татьяна и Юрий' },
  { id: '14', names: 'Женя и Инна' },
  { id: '15', names: 'Федор' },
  { id: '16', names: 'Игорь и Анастасия' },
  { id: '17', names: 'Светлана и Валерий' },
  { id: '18', names: 'Виктория и Евгений' },
  { id: '19', names: 'Алина' },
  { id: '20', names: 'Полина и Сергей' },
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
