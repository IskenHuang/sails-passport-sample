/**
 * api error messages
 *
 * json type is 'code' : 'message'
 *
 */

module.exports.error = {
    // genernal error
    '0': 'Who care~',

    // auth / user
    '10000': 'Can not find user',
    '10001': 'Can not update user',
    '10002': 'Can not create user because user is exist',
    '10003': 'Please login first',
    '10004': 'Required params: userId',
    '10005': 'Can not add self be a friend',
    '10006': 'Can not create account from github',
    '10007': 'Can not create account from facebook',
    '10008': 'Can not create account from twitter'
};
