/**
 * ShopReactNative
 *
 * @author Tony Wong
 * @date 2016-08-13
 * @email 908601756@qq.com
 * @copyright Copyright © 2016 EleTeam
 * @license The MIT License (MIT)
 */

/**
 * redux actions - 用户模块
 */

'user strict';

import * as types from './actionTypes';
import Util from '../common/utils';
import { Alert } from 'react-native';

/**
 *
 * @returns {function()}
 */
export let userView = () => {
    let url = 'http://local.eleteamapi.ygcr8.com/v1/user/view?id=2';
    return (dispatch) => {
        dispatch({'type':types.kUserView});
        Util.get(url,
            () => {},
            () => {});
    }
}

export let userViewPublic = (id) => {
    let url = 'http://local.eleteamapi.ygcr8.com/v1/user/view?id=2';
    return () => {

    }
}

export let userLoggedIn = () => {
    let url = 'http://local.eleteamapi.ygcr8.com/v1/user/view?id=2';
    return (dispatch) => {
        dispatch({'type': types.kUserLoggedDoing});
        Util.get(url,
            (response) => {
                dispatch({'type': types.kUserLoggedIn, 'user': response});
            },
            (error) => {
                Alert.alert(error.message);
                dispatch({'type': types.kUserLoggedError});
            });
    }
}
