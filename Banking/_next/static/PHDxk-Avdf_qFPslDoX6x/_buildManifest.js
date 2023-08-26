self.__BUILD_MANIFEST = function(s, e, a, c) {
    return {
        __rewrites: {
            beforeFiles: [],
            afterFiles: [],
            fallback: []
        },
        "/": [s, e, a, c, "static/chunks/pages/index-b358a5649f2a5ceb.js"],
        "/404": ["static/chunks/pages/404-69c70c15ab09ad31.js"],
        "/500": ["static/chunks/pages/500-434bfeeca1629029.js"],
        "/_error": ["static/chunks/pages/_error-deefae67ca062615.js"],
        "/faucet": [s, e, a, "static/chunks/pages/faucet-e66534bbd4f51934.js"],
        "/markets": [c, "static/chunks/pages/markets-554009d7fbba25ce.js"],
        "/reserve-overview": [s, "static/chunks/432-14e2853b004ee2b0.js", "static/chunks/pages/reserve-overview-0e8b52ad96a9e445.js"],
        "/sdai": [e, "static/chunks/pages/sdai-f904667cc98cbde1.js"],
        "/v3-migration": [s, e, a, "static/chunks/pages/v3-migration-237593919b35e2d6.js"],
        sortedPages: ["/", "/404", "/500", "/_app", "/_error", "/faucet", "/markets", "/reserve-overview", "/sdai", "/v3-migration"]
    }
}("static/chunks/249-14833263b8b2dad8.js", "static/chunks/597-602570589de37ffc.js", "static/chunks/838-95b313d3e4ab4265.js", "static/chunks/505-76275eb73e3bb684.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();