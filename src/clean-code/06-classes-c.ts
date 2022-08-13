(() => {

    //* Aplicando el Principio de responsabilidad única
    //* Priorizar la composicion frente a la herencia

    type Gender = 'M' | 'F';

    interface PersonProps {
        name: string;
        gender: Gender;
        birthdate: Date;
    }

    class Person {
        public name: string;
        public gender: Gender;
        public birthdate: Date;

        constructor({ name, gender, birthdate }: PersonProps) {
            this.birthdate = birthdate;
            this.gender = gender;
            this.name = name;
        }
    }

    interface UserProps {
        email: string;
        role: string;
    }

    class User {
        public email: string;
        public lastAccess: Date;
        public role: string;

        constructor({ email, role }: UserProps) {
            this.email = email;
            this.lastAccess = new Date();
            this.role = role;
        }

        checkCredentials() {
            return true;
        }
    }

    interface SettingsProps {
        lastOpenFolder: string;
        workingDirectory: string;
    }

    interface UserSettingProps {
        workingDirectory: string;
        lastOpenFolder: string;
        email: string;
        role: string;
        name: string;
        gender: Gender;
        birthdate: Date;
    }

    class Settings {
        public lastOpenFolder: string;
        public workingDirectory: string;
        constructor(
            { workingDirectory, lastOpenFolder }: SettingsProps
        ) {
            this.lastOpenFolder = lastOpenFolder;
            this.workingDirectory = workingDirectory;
        }
    }

    class UserSettings {
        public person: Person;
        public user: User;
        public settings: Settings;

        constructor({
            name, gender, birthdate,
            email, role,
            lastOpenFolder, workingDirectory
        }: UserSettingProps) {
            this.person = new Person({ name, gender, birthdate });
            this.user = new User({ email, role });
            this.settings = new Settings({ lastOpenFolder, workingDirectory })
        }
    }


    const userSettings = new UserSettings({
        workingDirectory: '/user/home',
        lastOpenFolder: '/home',
        email: 'carlos@google.com',
        role: 'Admin',
        name: 'Carlos',
        gender: 'M',
        birthdate: new Date('1999-09-09')
    })

    console.log({ userSettings })


})();