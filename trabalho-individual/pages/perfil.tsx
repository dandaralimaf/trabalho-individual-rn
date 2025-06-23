import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "../styles";
import HomeIcon from "../assets/home.png";
import SearchIcon from "../assets/lupa.png";
import BellIcon from "../assets/sino.png";
import MessageIcon from "../assets/carta.png";
import StarIcon from "../assets/estrela.png";
import BackArrowIcon from "../assets/voltar.png";

export default function Perfil() {
    return (
        <View style={styles.container}>
            {/* Top Bar */}
            <View style={styles.topBar}>
                <TouchableOpacity>
                    <Image source={BackArrowIcon} style={styles.topBarIcon1} />
                </TouchableOpacity>
                <View style={styles.topBarRight1}>
                    <TouchableOpacity>
                        <Image source={SearchIcon} style={styles.topBarIcon1} />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Perfil */}
            <Image
                source={{ uri: "https://i.imgur.com/6VBx3io.png" }}
                style={styles.profileImage}
            />
            <View style={styles.header}>
                <Text style={styles.headerName}>dandara</Text>
            </View>
            <Text style={styles.bio}>escorpiana asc touro</Text>
            <Text style={styles.joined}>Entrou em julho de 2020</Text>

            <View style={styles.stats}>
                <Text style={styles.stat}>604 Seguindo</Text>
                <Text style={styles.stat}>666 Seguidores</Text>
            </View>

            <TouchableOpacity style={styles.editButton}>
                <Text style={styles.editText}>Editar perfil</Text>
            </TouchableOpacity>

            {/* Tabs */}
            <View style={styles.tabs}>
                <Text style={[styles.tabText, styles.activeTabText]}>Posts</Text>
                <Text style={styles.tabText}>Respostas</Text>
                <Text style={styles.tabText}>Destaques</Text>
                <Text style={styles.tabText}>Vídeos</Text>
                <Text style={styles.tabText}>Fotos</Text>
            </View>

            {/* Tweets */}
            <View style={{ marginBottom: 20 }}>
                <View style={styles.tweet}>
                    <View style={styles.tweetContent}>
                        <Image
                            source={{ uri: "https://i.imgur.com/6VBx3io.png" }}
                            style={styles.tweetAvatar}
                        />
                        <View style={{ flex: 1 }}>
                            <View style={styles.tweetHeader}>
                                <Text style={styles.tweetName}>dandara</Text>
                                <Text style={styles.tweetUsernameAndDate}>
                                    @dandaralimaf · 23/06/2025
                                </Text>
                            </View>
                            <Text style={styles.tweetText}>hoje tenho aula de react</Text>
                            <View style={styles.tweetStats}>
                                <Text style={styles.tweetStatText}>1 Comentários</Text>
                                <Text style={styles.tweetStatText}>2 Retweets</Text>
                                <Text style={styles.tweetStatText}>150 Curtidas</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.tweet}>
                    <View style={styles.tweetContent}>
                        <Image
                            source={{ uri: "https://i.imgur.com/6VBx3io.png" }}
                            style={styles.tweetAvatar}
                        />
                        <View style={{ flex: 1 }}>
                            <View style={styles.tweetHeader}>
                                <Text style={styles.tweetName}>dandara</Text>
                                <Text style={styles.tweetUsernameAndDate}>
                                    @dandaralimaf · 19/06/2025
                                </Text>
                            </View>
                            <Text style={styles.tweetText}>
                                estou quase acabando a residência!!! oba
                            </Text>
                            <View style={styles.tweetStats}>
                                <Text style={styles.tweetStatText}>0 Comentários</Text>
                                <Text style={styles.tweetStatText}>1 Retweets</Text>
                                <Text style={styles.tweetStatText}>0 Curtidas</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.tweet}>
                    <View style={styles.tweetContent}>
                        <Image
                            source={{ uri: "https://i.imgur.com/6VBx3io.png" }}
                            style={styles.tweetAvatar}
                        />
                        <View style={{ flex: 1 }}>
                            <View style={styles.tweetHeader}>
                                <Text style={styles.tweetName}>dandara</Text>
                                <Text style={styles.tweetUsernameAndDate}>
                                    @dandaralimaf · 18/06/2025
                                </Text>
                            </View>
                            <Text style={styles.tweetText}>comi lasanha hmmmmm</Text>
                            <View style={styles.tweetStats}>
                                <Text style={styles.tweetStatText}>3 Comentários</Text>
                                <Text style={styles.tweetStatText}>1 Retweets</Text>
                                <Text style={styles.tweetStatText}>10 Curtidas</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.tweet}>
                    <View style={styles.tweetContent}>
                        <Image
                            source={{ uri: "https://i.imgur.com/6VBx3io.png" }}
                            style={styles.tweetAvatar}
                        />
                        <View style={{ flex: 1 }}>
                            <View style={styles.tweetHeader}>
                                <Text style={styles.tweetName}>dandara</Text>
                                <Text style={styles.tweetUsernameAndDate}>
                                    @dandaralimaf · 17/06/2025
                                </Text>
                            </View>
                            <Text style={styles.tweetText}>to tão cansada</Text>
                            <View style={styles.tweetStats}>
                                <Text style={styles.tweetStatText}>0 Comentários</Text>
                                <Text style={styles.tweetStatText}>1 Retweets</Text>
                                <Text style={styles.tweetStatText}>0 Curtidas</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

            {/* Footer */}
            <View style={styles.footer}>
                <Image source={HomeIcon} style={styles.footerIcon} />
                <Image source={SearchIcon} style={styles.footerIcon} />
                <Image source={StarIcon} style={styles.footerIcon} />
                <Image source={BellIcon} style={styles.footerIcon} />
                <Image source={MessageIcon} style={styles.footerIcon} />
            </View>
        </View>
    );
}