/** @odoo-module **/

import publicWidget from '@web/legacy/js/public/public_widget';
import { jsonrpc } from "@web/core/network/rpc_service";

publicWidget.registry.YhServices = publicWidget.Widget.extend({
    selector: ".service-gz", // Sélecteur pour le widget

    start() {
        // Utilisation de jsonrpc pour appeler le contrôleur
        jsonrpc('/Catalogue', {}, { method: 'POST' }).then((res) => {
            if (res && Array.isArray(res)) {
                // Trouver la section appropriée où injecter le contenu
                let container = this.el.querySelector(".conta"); // Assurez-vous que ce sélecteur est correct
                if (container) {
                    let html = "";
                    res.forEach(item => {
                        // Construction de la carte de service avec image, titre, description, et lien
                        html += `
                            <div class="card" onmouseover="moveCard(this)">
                                <div class="badge">${item.categories || 'Category'}</div>
                                <img src="data:image/png;base64,${item.image || ''}" alt="${item.name || 'Image du service'}" id="rekognition-image"/>
                                <h2 class="bodoni">${item.name || 'Titre du Service'}</h2>
                                <p>${item.description || 'Description courte du service.'}</p>
                                <a href="${item.link_subscription || '#'}" class="learn-more-button-link">
                                    <button class="learn-more-button">
                                        <span class="learn-more-text">Learn More</span>
                                        <i class="fas fa-arrow-right"></i>
                                    </button>
                                </a>
                            </div>`;
                    });
                    // Injecter le HTML dans le conteneur
                    container.innerHTML = html;
                }
            } else {
                console.error("Les données reçues ne sont pas au format attendu.", res);
            }
        }).catch(error => {
            console.error("Erreur lors de la récupération des données du catalogue :", error);
        });
    },
});

export default publicWidget.registry.YhServices;
