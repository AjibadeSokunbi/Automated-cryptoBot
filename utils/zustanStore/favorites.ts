import { TokenPairDetails, UseStoreProps } from '../types';
import { StateCreator, create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const myMiddlewares = (f: StateCreator<UseStoreProps>) =>
    devtools(persist(f, { name: 'favorite-store2' }))

const useFavoriteStore = create<UseStoreProps>()(
    myMiddlewares(
        (set) => ({
            favoritedProjects: {
                projectsDetails: [],
            },
            addToFavorite: (projectId: string, tokenPairDetails: TokenPairDetails) => {
                set((state) => {
                  const existingProjectIndex = state.favoritedProjects.projectsDetails.findIndex(
                    (project) => project.id === projectId
                  );
                    if (existingProjectIndex !== -1) {
                        return state; 
                    } else {
                        return {
                          favoritedProjects: {
                            projectsDetails: [
                              ...state.favoritedProjects.projectsDetails,
                              { id: projectId, tokenPairDetails: tokenPairDetails },
                            ],
                          },
                        };
                      }
                    });
                  },
            removeFromFavorite: (projectId: string) => {
                set((state) => ({
                    favoritedProjects: {
                        projectsDetails: state.favoritedProjects.projectsDetails.filter(
                            (project) => project.id !== projectId
                        ),
                    },
                }));
            },
        })
    )
);

export default useFavoriteStore;
