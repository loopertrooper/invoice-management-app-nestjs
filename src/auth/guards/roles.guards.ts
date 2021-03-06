// import { Injectable, CanActivate, ExecutionContext, Inject, forwardRef } from "@nestjs/common";
// import { Reflector } from "@nestjs/core";
// import { UsersService } from '../../users/users.service';
// import { Observable } from "rxjs";
// import { User } from '../../users/user.model';
// import { map } from "rxjs/operators";
// //import { hasRoles } from "../decorators/roles.decorator";


// @Injectable()
// export class RolesGuard implements CanActivate {
//     constructor(
//         private reflector: Reflector,

//         @Inject(forwardRef(() => UsersService))
//         private usersService: UsersService
//     ) { }

//     canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
//         const roles = this.reflector.get<string[]>('roles', context.getHandler());
//         if (!roles) {
//             return true;
//         }

//         const request = context.switchToHttp().getRequest();
//         const user: User = request.user;

//         return this.usersService.findOne(user.id).pipe(
//             map((user: User) => {
//                 const hasRole = () => roles.indexOf(user.role) > -1;
//                 let hasPermission: boolean = false;

//                 if (hasRole()) {
//                     hasPermission = true;
//                 };
//                 return user && hasPermission;
//             })
//         )
//     }
// }