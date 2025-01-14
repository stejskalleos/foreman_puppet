require 'spec_puppet_helper'

describe 'hosts/select_multiple_environment.html.erb' do
  let!(:environment) { FactoryBot.create(:environment, name: 'SpecialEnv') }

  it 'renders the form' do
    hosts = [FactoryBot.build_stubbed(:host)]
    hosts.stubs(:preload).returns(hosts)
    assign(:hosts, hosts)

    render

    expect(rendered).to have_selector('td', text: hosts.first.name)

    expect(rendered).to have_selector('#environment_id option', text: '*Clear environment*')
    expect(rendered).to have_selector('#environment_id option[value="inherit"]', text: '*Inherit from host group*')
    expect(rendered).to have_selector("#environment_id option[value='#{environment.id}']", text: environment.name)
  end
end
