import { bind }  from '@angular/core';

import { app_routing, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from './app.routing';
import { DataService } from './shared/services/data.service';

export const APP_PROVIDERS = {
    app_routing,
    DataService,
    ROUTER_PROVIDERS,
    bind(LocationStrategy).toClass(HashLocationStrategy)
}