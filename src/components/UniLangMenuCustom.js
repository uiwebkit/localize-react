function UniLangMenuCustom() {
    return (
        <span>
            <uni-store-set
                mode={'init'}
                path={'loc.active'}
                state={'{"route": "lang=en", "flag": "gb", "textLabel": "English", "translationUrl": "i18n/en.json"}'}
            />

            <uni-lang-menu only={true}>
                <uni-menu>
                    <uni-button pro={true}>
                        <uni-button-icon only={true}>
                            <uni-event-store-get path={'loc.active.flag'} selector={'uni-flag'} prop={'name'}>
                                <uni-flag round={true}/>
                            </uni-event-store-get>
                        </uni-button-icon>

                        <uni-button-label>
                            <uni-event-store-get path={'loc.active.textLabel'} selector={'uni-render'} prop={'value'}>
                                <uni-render text={true}/>
                            </uni-event-store-get>
                        </uni-button-label>

                        <uni-drop-down/>
                    </uni-button>

                    <uni-menu-surface>
                        <uni-list-wrap pro={true}>
                            <ul>
                                <uni-load-repeat strict={true} url={'lang-menu.json'}>
                                    <uni-template hidden={true}>
                                        <uni-router-link params={'(( route ))'}>
                                            <uni-event-store-get
                                                path={'loc.active.textLabel'}
                                                equal={'(( textLabel ))'}
                                                prop={'selected'}
                                            >
                                                <uni-list-item>
                                                    <uni-list-item-graphic only={true}>
                                                        <uni-modify
                                                            action={'unbind'}
                                                            state={'(( flag ))'}
                                                            prop={'name'}
                                                        >
                                                            <uni-flag round={true}/>
                                                        </uni-modify>
                                                    </uni-list-item-graphic>

                                                    <uni-list-item-text>(( textLabel ))</uni-list-item-text>
                                                </uni-list-item>
                                            </uni-event-store-get>
                                        </uni-router-link>

                                        <uni-route params={'(( route ))'} prop={'activate'}>
                                            <uni-store-set inactive={true} path={'loc.active'} state={'(( uniself ))'}/>
                                        </uni-route>
                                    </uni-template>
                                </uni-load-repeat>
                            </ul>
                        </uni-list-wrap>
                    </uni-menu-surface>
                </uni-menu>
            </uni-lang-menu>

            <uni-event-store-get path={'loc.active.translationUrl'} selector={'uni-load-store'} prop={'url'}>
                <uni-load-store multi={true} mode={'set'} path={'loc.translate'}/>
            </uni-event-store-get>
        </span>
    );
}

export default UniLangMenuCustom;
