import { Text, FlatList } from 'react-native';
let componentsDirectory = '';
import Address from componentsDirectory + 'address';
import Tel from componentsDirectory + 'Tel';
import Email from componentsDirectory + 'Email';

const render = {

    bio: (bio, styles) => {

        <Text styles = {styles}>
            {bio}
        </Text>

    },
    addresses: (addresses, styles, onOpenMap) => {

        <FlatList

        contentContainerStyle = {styles.addressContainer}
        data = {addresses}
        renderItem = {({item}) => {

                <Address

                    index = {k}
                    address = {item.address}
                    location = {item.location}
                    onOpenMap = {onOpenMap}/>

        }}/>

    },
    telephones: (telephones, styles, onPressSms, onPressTel, onPressWhatsapp) => {

        <FlatList

        contentContainerStyle = {styles.telContainer}
        data = {telephones}
        renderRow = {({item}) => {

                <Tel

                    index = {k}
                    name = {item.name}
                    number = {item.number}
                    onPressSms = {onPressSms}
                    onPressTel = {onPressTel}
                    onPressWhatsapp = {onPressWhatsapp}/>

        }}/>

    },
    emails: (emails, styles, onePressEmail) => {

        <FlatList

        contentContainerStyle = {styles.emailContainer}
        data = {emails}
        renderRow = {({item}) => {

                <Email

                    index = {k}
                    name = {item.name}
                    email = {item.email}
                    onePressEmail = {onePressEmail}/>

        }}/>

    },
    workingTimes: (workingTimes, styles) => {

        <FlatList

        contentContainerStyle = {styles.workingTimesContainer}
        data = {workingTimes}
        renderRow = {({item}) => {

                <Text>
                    {item}
                </Text>

        }}/>

    },
    seperator: () => {

    }

}

const Info = ({bio, addresses, telephones, emails, workingTimes, styles}) => {
    
    <View>

        {render.bio(bio, styles.bio)}
        {render.seperator()}

        {render.addresses(addresses, styles.addresses)}
        {render.seperator()}

        {render.telephones(telephones, styles.telephones)}
        {render.seperator()}

        {render.emails(emails, styles.emails)}
        {render.seperator()}

        {render.workingTimes(workingTimes, styles.workingTimes)}

    </View>

};