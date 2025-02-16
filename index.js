import i18next from 'i18next';

i18next.init({
    fallbackLng: 'en',
    resources: {
        en: {
            translation: {
                cake_one: 'cake',
                cake_other: 'cakes'
            }
        }
    }
});

const ret = i18next.t('cake', {count: 2}); //count 1 outputs cake, count 2 outputs cakes
console.log(ret);