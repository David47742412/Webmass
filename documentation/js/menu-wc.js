'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">webapp-mass documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-3021fa64c63b40997f0816b4498b6ed82e9cf3efac85b587fe5e98c47cfc87f748dbcbd69cfc17e8ec8407f446a56f7131f1ea0c0097ba10ad7810384af24c6a"' : 'data-target="#xs-controllers-links-module-AppModule-3021fa64c63b40997f0816b4498b6ed82e9cf3efac85b587fe5e98c47cfc87f748dbcbd69cfc17e8ec8407f446a56f7131f1ea0c0097ba10ad7810384af24c6a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-3021fa64c63b40997f0816b4498b6ed82e9cf3efac85b587fe5e98c47cfc87f748dbcbd69cfc17e8ec8407f446a56f7131f1ea0c0097ba10ad7810384af24c6a"' :
                                            'id="xs-controllers-links-module-AppModule-3021fa64c63b40997f0816b4498b6ed82e9cf3efac85b587fe5e98c47cfc87f748dbcbd69cfc17e8ec8407f446a56f7131f1ea0c0097ba10ad7810384af24c6a"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-3021fa64c63b40997f0816b4498b6ed82e9cf3efac85b587fe5e98c47cfc87f748dbcbd69cfc17e8ec8407f446a56f7131f1ea0c0097ba10ad7810384af24c6a"' : 'data-target="#xs-injectables-links-module-AppModule-3021fa64c63b40997f0816b4498b6ed82e9cf3efac85b587fe5e98c47cfc87f748dbcbd69cfc17e8ec8407f446a56f7131f1ea0c0097ba10ad7810384af24c6a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-3021fa64c63b40997f0816b4498b6ed82e9cf3efac85b587fe5e98c47cfc87f748dbcbd69cfc17e8ec8407f446a56f7131f1ea0c0097ba10ad7810384af24c6a"' :
                                        'id="xs-injectables-links-module-AppModule-3021fa64c63b40997f0816b4498b6ed82e9cf3efac85b587fe5e98c47cfc87f748dbcbd69cfc17e8ec8407f446a56f7131f1ea0c0097ba10ad7810384af24c6a"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsuarioModule.html" data-type="entity-link" >UsuarioModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UsuarioModule-471ca09c3a87f3cd1f771908f5b41d92f8f07c073588a64c28966eac5e9403189c126801b4c22bf04d059fff4569e82b80e48c936eb92f9c55b392fc6d69e7f7"' : 'data-target="#xs-controllers-links-module-UsuarioModule-471ca09c3a87f3cd1f771908f5b41d92f8f07c073588a64c28966eac5e9403189c126801b4c22bf04d059fff4569e82b80e48c936eb92f9c55b392fc6d69e7f7"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsuarioModule-471ca09c3a87f3cd1f771908f5b41d92f8f07c073588a64c28966eac5e9403189c126801b4c22bf04d059fff4569e82b80e48c936eb92f9c55b392fc6d69e7f7"' :
                                            'id="xs-controllers-links-module-UsuarioModule-471ca09c3a87f3cd1f771908f5b41d92f8f07c073588a64c28966eac5e9403189c126801b4c22bf04d059fff4569e82b80e48c936eb92f9c55b392fc6d69e7f7"' }>
                                            <li class="link">
                                                <a href="controllers/UsuarioController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsuarioController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UsuarioModule-471ca09c3a87f3cd1f771908f5b41d92f8f07c073588a64c28966eac5e9403189c126801b4c22bf04d059fff4569e82b80e48c936eb92f9c55b392fc6d69e7f7"' : 'data-target="#xs-injectables-links-module-UsuarioModule-471ca09c3a87f3cd1f771908f5b41d92f8f07c073588a64c28966eac5e9403189c126801b4c22bf04d059fff4569e82b80e48c936eb92f9c55b392fc6d69e7f7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsuarioModule-471ca09c3a87f3cd1f771908f5b41d92f8f07c073588a64c28966eac5e9403189c126801b4c22bf04d059fff4569e82b80e48c936eb92f9c55b392fc6d69e7f7"' :
                                        'id="xs-injectables-links-module-UsuarioModule-471ca09c3a87f3cd1f771908f5b41d92f8f07c073588a64c28966eac5e9403189c126801b4c22bf04d059fff4569e82b80e48c936eb92f9c55b392fc6d69e7f7"' }>
                                        <li class="link">
                                            <a href="injectables/UsuarioService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsuarioService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsuarioController.html" data-type="entity-link" >UsuarioController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateUsuarioDto.html" data-type="entity-link" >CreateUsuarioDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUsuarioDto.html" data-type="entity-link" >UpdateUsuarioDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Usuario.html" data-type="entity-link" >Usuario</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsuarioService.html" data-type="entity-link" >UsuarioService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});