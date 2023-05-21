#[allow(unused_attributes)]
#[cfg_attr(all(not(debug_assertions), target_os = "windows"), windows_subsystem = "windows")]
extern crate tauri;

use std::fs;
use tauri::{CustomMenuItem, Manager, SystemTray, SystemTrayEvent, SystemTrayMenu};

fn main() {
	tauri::Builder::default()
    	
		.system_tray(
			SystemTray::new().with_menu(
				SystemTrayMenu::new()
					.add_item(CustomMenuItem::new("show".to_string(), "Show"))
					.add_item(CustomMenuItem::new("hide".to_string(), "Hide"))
					.add_item(CustomMenuItem::new("exit".to_string(), "Exit"))
					.add_item(CustomMenuItem::new("run".to_string(), "Run Scripts"))
			),
		)


		.on_system_tray_event(|app: &tauri::AppHandle, event: SystemTrayEvent| {
			if let SystemTrayEvent::MenuItemClick { id, .. } = event {
				match id.as_str() {
					"show" => {
						app.windows().into_iter().for_each(|(_label, window)| {
							window.show().unwrap();
						});
					}
					"hide" => {


						app.windows().into_iter().for_each(|(_label, window)| {
							window.hide().unwrap();
						});
					}
					"exit" => {
						std::process::exit(0);
					}
					"run" => {
						app.windows().into_iter().for_each(|(_label, window)| {
					window.eval(&fs::read_to_string(window.app_handle().path_resolver()						.resolve_resource(format!("../dist/scripts/{}.js", window.label()))
							.expect("Failed to resolve resource dir."),
					)
					.expect("Error while reading JS file."),
				)
				.expect("Script did not execute successfully.");

				window.eval(&format!(
					r#"var style = document.createElement('style'); style.innerHTML = `{}`; document.head.appendChild(style);"#,
					&fs::read_to_string(
						window.app_handle().path_resolver()
							.resolve_resource(format!("../dist/styles/{}.css", window.label()))
							.expect("Failed to resolve resource dir.")
					)
					.expect("Error while reading CSS file.")
				))
				.expect("Style did not load successfully.");
						})
					}
					_ => {}
				}
			}
		})
		.run(tauri::generate_context!())
		.expect("Error! Failed to run Tauri.");
}
