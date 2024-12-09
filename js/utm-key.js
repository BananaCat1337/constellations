function getUTMParams() {
    console.log(window, 'window.location.search');
    const params = new URLSearchParams(window.location.search);
    return {
        utm_source: params.get('utm_source'),
        utm_medium: params.get('utm_medium'),
        utm_campaign: params.get('utm_campaign'),
        utm_term: params.get('utm_term'),
        utm_content: params.get('utm_content'),
    };
}

const utmParams = getUTMParams();
console.log('Наши UTM-метки:', utmParams);