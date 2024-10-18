(function () {
    function configureKasada () {
        window.KPSDK.configure([            {
                protocol: 'https',
                method: '*',
                domain: 'www.nordstrom.com',
                path: '/giftcards'
            },
            {
                protocol: 'https',
                method: '*',
                domain: 'www.nordstrom.com',
                path: '/wishlist/api/v4/shoppers/*'
            },
            {
                protocol: 'https',
                method: '*',
                domain: 'www.nordstrom.com',
                path: '/api/checkout/web/checkout/v1/order/submit'
            },
            {
                protocol: 'https',
                method: '*',
                domain: 'www.nordstrom.com',
                path: '/review/review'
            }
        ]);
    }

    if (window.KPSDK !== undefined && typeof window.KPSDK.configure === "function") {
        configureKasada();
    } else {
        document.addEventListener('kpsdk-load', configureKasada);
    }
})();