/**
 * @copyright Copyright (c) 2018 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license AGPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

 import { generateUrl } from '@nextcloud/router'
 import Router from 'vue-router'
 import Vue from 'vue'

 const Timeline = () => import('./components/Timeline')

 Vue.use(Router)

 /**
  * Parse the path of a route : join the elements of the array and return a single string with slashes
  * + always lead current path with a slash
  *
  * @param {string | Array} path path arguments to parse
  * @return {string}
  */
 const parsePathParams = (path) => {
     return `/${Array.isArray(path) ? path.join('/') : path || ''}`
 }

 export default new Router({
     mode: 'history',
     // if index.php is in the url AND we got this far, then it's working:
     // let's keep using index.php in the url
     base: generateUrl('/apps/memories', ''),
     linkActiveClass: 'active',
     routes: [
         {
             path: '/',
             component: Timeline,
             name: 'timeline',
             props: route => ({
                 rootTitle: t('timeline', 'Timeline'),
             }),
         },

         {
            path: '/albums/:id*',
            component: Timeline,
            name: 'albums',
            props: route => ({
                rootTitle: t('albums', 'Albums'),
            }),
        },
     ],
 })