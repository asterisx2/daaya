import Posts from './Posts';
import Info from './Info';

const render = {

    header: ({institutionName, insitutionLogo, institutionBanner}) => {
        <View style={styles.headerContainer}>
            <View style={styles.coverContainer}>
            <ImageBackground
                source={{
                uri: institutionBanner,
                }}
                style={styles.coverImage}>
                <View style={styles.coverMetaContainer}>
                <Text style={styles.coverName}>{institutionName}</Text>
                </View>
            </ImageBackground>
            </View>
            <View style={styles.profileImageContainer}>
            <Image
                source={{
                uri: insitutionLogo,
                }}
                style={styles.profileImage}/>
            </View>
      </View>
    },

    posts: (posts) => {
        <Posts posts = {posts}/>
    },

    requirements: (requirements) => {
        <Posts posts = {posts}/>
    },

    info: (institutionInfo) => {
        <Info {...institutionInfo} />
    },

    scene: (key, posts, requirements, institutionInfo) => {
        switch (key) {
            case '1':
              return this.posts(posts);
            case '2':
              return this.posts(requirements);
            case '3':
              return this.info(institutionInfo);
            default:
              return <View />
          }
    },

    tabLabel: () => {

    },

    pager: () => {

    }

};

const handle = {

    indexChange: () => {

    },

    openPost: () => {

    },

    openRequirement: () => {

    }

};

const InstitutionPage = ({

    posts, 
    requirements, 
    institutionName, 
    institutionInfo, 
    institutionBanner, 
    insitutionLogo

    }) => {

};

export default InstitutionPage;