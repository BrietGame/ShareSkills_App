<template>
  <div class="flex h-screen flex-col justify-between border-e bg-white">
    <div class="px-4 py-6">
      <span class="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
        Logo
      </span>

      <ul class="mb-4 mt-6">
        <li>
          <span class="font-bold">Espace Formateur</span>
        </li>
      </ul>
  
      <ul class="space-y-1">
        <li>
          <RouterLink
            to="/dashboard"
            class="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
          >
            Tableau de bord
          </RouterLink>
        </li>
  
        <li>
          <details class="group [&_summary::-webkit-details-marker]:hidden">
            <summary
              class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              <span class="text-sm font-medium"> Formations </span>
  
              <span class="shrink-0 transition duration-300 group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </summary>
  
            <ul class="mt-2 space-y-1 px-4">
              <li>
                <RouterLink
                  to="/formations/published"
                  class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Publiées
                </RouterLink>
              </li>
  
              <li>
                <RouterLink
                  to="/formations/drafts"
                  class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Brouillon
                </RouterLink>
              </li>
  
              <li>
                <RouterLink
                  to="/formations/archived"
                  class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Archivées
                </RouterLink>
              </li>
            </ul>
          </details>
        </li>
  
        <li>
          <RouterLink
            to="/messages"
            class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            Messagerie
          </RouterLink>
        </li>
  
        <li>
          <RouterLink
            to="/billing"
            class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            Facturation
          </RouterLink>
        </li>
  
        <li>
          <RouterLink
            to="/notifications"
            class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            Notifications
          </RouterLink>
        </li>

        <br>
        <hr>
        <br>

        <li>
          <RouterLink
            to="/settings"
            class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            Paramètres
          </RouterLink>
        </li>

        <li>
          <RouterLink
            to="/logout"
            class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            Se déconnecter
          </RouterLink>
        </li>
      </ul>
    </div>
  
    <div class="sticky inset-x-0 bottom-0 border-t border-gray-100">
      <RouterLink
        to="/profile"
        class="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
      >
        <img
          alt=""
          src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          class="size-10 rounded-full object-cover"
        />
  
        <div>
          <p class="text-xs">
            <strong class="block font-medium">Eric Frusciante</strong>
  
            <span> eric@frusciante.com </span>
          </p>
        </div>
      </RouterLink>
    </div>
  </div>
</template>
