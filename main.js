$(document).ready(function () {
    $("div[data-id='Parchemin du shinobi'], div[data-id='Annonces'], div[data-id='Services'], div[data-id='Archives']").wrapAll('<div class="ash-categories"></div>');
    $("div[data-id='Personnage'], div[data-id='Carnet du shinobi']").wrapAll('<div class="ash-categories"></div>');
    
    const onlineChanged = $("#online").text().replace('Utilisateurs enregistrés :','');
    $("#online").text(onlineChanged);

    const totalOnlineText = $("#totalonline").text();
    const totalOnlineParts = totalOnlineText.split(' :: ');
    const totalOnlineChanged = totalOnlineParts[1].replace('Enregistré,','Shinobi')
                                                 .replace('Invisible et','Yokai')
                                                 .replace('Invité','Présents');
    $("#totalonline").text(totalOnlineChanged);

    
    const connectedMembersChanged = $("#connectedmembers").text().replace('Membres connectés au cours des 24 dernières heures :','');
    $("#connectedmembers").text(connectedMembersChanged);
});