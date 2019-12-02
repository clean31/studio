/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { PortModel, PortModelAlignment } from '@projectstorm/react-diagrams';
import { DefaultLinkModel } from '@projectstorm/react-diagrams-defaults';


class StudioPortModel extends PortModel {

    static counter = 1;

    constructor(type, label, inbound) {
        super({
            type,
            name: 'studio-port-' + StudioPortModel.counter++,
            alignment: (inbound ? PortModelAlignment.LEFT : PortModelAlignment.RIGHT)
        });
        this.inbound = inbound;
        this.label = label;
    }

    link(port) {
        let link = this.createLinkModel();
        link.setSourcePort(this);
        link.setTargetPort(port);
        return link;
    }

    createLinkModel() {
        return new DefaultLinkModel();
    }

    doClone(lookupTable = {}, clone) {
        super.doClone(lookupTable, clone);
        clone.options.name = 'studio-port-' + StudioPortModel.counter++;
    }

}

export default StudioPortModel;
