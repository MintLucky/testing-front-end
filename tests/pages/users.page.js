const Page = require('./page');

class UsersPage extends Page {
    get loadingTitle() {
        return $('#users-loading')
    }

    get usersList() {
        return $('#users-list')
    }

    get usersItems() {
        return browser.react$$('User')
    }

    async loadData() {
        try {
            await this.open();
            await this.loadingTitle.waitForDisplayed({timeout: 2000});
            await this.usersList.waitForDisplayed({timeout: 2000});
        } catch (e) {
            throw new Error('Cannot load data. ' + e.message)
        }
    }

    async deleteUser() {
        try {
            const aaa = await this.usersList;
            console.log('aaa', aaa); 
            const usersCount = await this.usersItems.length;
            if(!usersCount) {
                throw new Error('Users list is empty');
            }

            await this.usersItems[0].$('#user-delete').click();

            const usersCountAfterDelete = await this.usersItems.length;

            if(usersCount - usersCountAfterDelete !== 1) {
                throw new Error('Deleting user failed');
            }

        } catch (e) {
            throw new Error('Can\'t delete user' + e.message)
        }
    }

    open() {
        return super.open('/users-test');
    }
}

module.exports = new UsersPage();
